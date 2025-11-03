export type Benefit = {
  title: string;
  description: string;
};

export type UseCase = {
  title: string;
  description: string;
};

export type Product = {
  id: string;
  featured: boolean;
  title: string;
  slug: string;
  subtitle: string;
  type: string;
  placeOfOrigin: string;
  lengthFeet: number;
  dimensions: string;
  material: string;
  tare_weight: string;
  payload_capacity: string;
  floor_type: string;
  compliance: string;
  image: string;
  benefits?: Benefit[];
  use_cases?: UseCase[];
};
