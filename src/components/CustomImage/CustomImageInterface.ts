export type stringOrNumber = string | number;
export interface CustomImageI {
  heightPercent?: number;
  modalImageHeightPercent?: number;
  imageURL: string;
};

export interface ImageModalI {
  isModalVisible?: boolean;
  width?: stringOrNumber;
  height?: number;
  imageURL: string;
  onClose?: () => void;
}
