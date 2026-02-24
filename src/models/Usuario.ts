import type Tema from "./Tema";
import type Usuario from './Usuario';

export default interface Postagem {
  foto: string | number | readonly string[] | undefined;
  nome: string | number | readonly string[] | undefined;
  senha: string;
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
  usuario: Usuario | null;
}