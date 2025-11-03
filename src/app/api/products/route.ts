import { NextRequest, NextResponse } from "next/server";
import products from "../../../data/products.json";

// Helper to parse comma-separated query params
function parseArrayParam(q: string | string[] | undefined) {
  if (!q) return [];
  return Array.isArray(q) ? q : String(q).split(",");
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search")?.toLowerCase() || "";
  const types = parseArrayParam(searchParams.get("types") || undefined);
  // const useCases = parseArrayParam(searchParams.get("useCases") || undefined);
  // const sort = searchParams.get("sort") || "relevance";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "9", 10);

  const results = products.filter((p) => {
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search) ||
      (p.subtitle || "").toLowerCase().includes(search) ||
      p.type.toLowerCase().includes(search) ||
      // (p.brandName || "").toLowerCase().includes(search) ||
      (p.placeOfOrigin || "").toLowerCase().includes(search);

    const matchesType = !types[0] || types.includes(p.type);
    // const matchesUseCases =
    //   !useCases[0] || p.useCases.some((u) => useCases.includes(u));

    return matchesSearch && matchesType;
  });

  // Sorting
  // if (sort === "newest") {
  //   results.sort(
  //     (a, b) =>
  //       new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //   );
  // } else if (sort === "price_asc") {
  //   results.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
  // } else if (sort === "price_desc") {
  //   results.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
  // }

  // Pagination
  const total = results.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = results.slice(start, end);

  return NextResponse.json({
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
    items,
  });
}
