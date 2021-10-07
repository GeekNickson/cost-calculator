export interface Cost {
  type: CostType;
  price: number;
}

export enum CostType {
  Econom = 'Эконом',
  Advanced = 'Продвинутый',
  Lux = 'Люкс',
}
