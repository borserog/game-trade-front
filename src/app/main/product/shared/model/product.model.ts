export class Product {
  id: string | number;
  title: string;
  description?: string;
  imagePath?: string;
  productItemLabel: EProductLabel;
  price: number;
  usuario?: string;
  isForSale?: boolean;
}

export enum EProductLabel {
  NOVO = 'NOVO',
  USADO = 'USADO',
  SEMINOVO = 'SEMINOVO',
  COLECIONADOR = 'COLECIONADOR'
}
