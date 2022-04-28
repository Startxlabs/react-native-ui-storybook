export type otpInputStatusType = "success" | "error" | "default";
export interface OtpInputI {
	value: string;
	textInputFocus: (e: any) => void;
	textInputBlur: (e: any) => void;
	onSubmitEditing?: (e: any) => void;
	onChangeText?: (text: any) => void;
	onKeyPress?: (e: any) => void;
	inputStatusType?: otpInputStatusType;
};

export interface OtpI {
	inputStatusType?: otpInputStatusType;
	numberOfInputs?: number;
	onSubmit?: (otp: Array<string>) => void;
};
