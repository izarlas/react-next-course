export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
  image: {
    url: string;
    // Todo remove dimensions and fix it with css flexbox
    dimensions: Dimensions;
  };
}

interface Dimensions {
  width: number;
  height: number;
}
