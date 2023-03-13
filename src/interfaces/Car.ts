export interface Car {
  id?: number
  model?: string
  manufacturer?: string
  year?: number
  fuelType?: string
  engine?: string
  transmission?: string
  color?: string
  interiorColor?: string
  options?: string[]
  price?: number
}

export interface CarGroupedByManufacturer {
  [key: string]: Car[]
}
