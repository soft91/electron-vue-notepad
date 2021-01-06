export interface IVForm {
	validate: () => boolean;
  resetValidation: () => boolean;
  reset: () => void;
}

export interface ListTypes {
  title: string,
  subtitle: string,
  content: string,
}