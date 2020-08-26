export type DialogProps<T> = {
  onModalCancel: () => void;
  onModalDone: (result: T) => void;
  defaultValue: any;
};

export type DialogComponent =
  | 'AddSourceDialog'
  | 'OutputSettingDialog';

export type DialogOptions = {
  title: string;
  component: DialogComponent;
  width: number;
  height: number;
};
