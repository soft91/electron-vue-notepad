interface IVForm {
	validate: () => boolean;
  resetValidation: () => boolean;
  reset: () => void;
}

interface ListTypes {
  title: string,
  subtitle: string,
  content: string,
}

export { IVForm, ListTypes };