export interface IProducts {
  name: string
  amount: string
}

export interface Products extends IProducts {
  id: number
}
