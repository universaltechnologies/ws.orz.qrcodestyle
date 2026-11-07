import { ErrorCorrectionLevel, Mode, QRCodeMatrix, TypeNumber } from "../types";
export interface QRCodeGenerationOptions {
    typeNumber: TypeNumber;
    mode?: Mode;
    errorCorrectionLevel: ErrorCorrectionLevel;
}
export default function createQRCode(data: string, options: QRCodeGenerationOptions): QRCodeMatrix;
