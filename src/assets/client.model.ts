export interface Client {
  nome: string;
  corretor?: string;
  telefone: number | null;
  empresa: string;
  email: string;
  id?: number;
}
