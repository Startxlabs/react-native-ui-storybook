export interface OtpInputI {
	value: string;
	textInputFocus: (e: any) => void;
	textInputBlur: (e: any) => void;
	onSubmitEditing?: (e: any) => void;
	onChangeText?: (text: any) => void;
	onKeyPress?: (e: any) => void;
	inputStatusType?: "success" | "error" | "default";
};
