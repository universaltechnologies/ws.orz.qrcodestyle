import { create } from "qrcode/lib/core/qrcode";
import { ErrorCorrectionLevel, Mode, QRCodeMatrix, TypeNumber } from "../types";

export interface QRCodeGenerationOptions {
  typeNumber: TypeNumber;
  mode?: Mode;
  errorCorrectionLevel: ErrorCorrectionLevel;
}

export default function createQRCode(data: string, options: QRCodeGenerationOptions): QRCodeMatrix {
  const encodedData = options.mode ? [{ data, mode: options.mode }] : data;
  const result = create(encodedData, {
    version: options.typeNumber || undefined,
    errorCorrectionLevel: options.errorCorrectionLevel
  });

  return {
    getModuleCount: (): number => result.modules.size,
    isDark: (row: number, col: number): boolean => Boolean(result.modules.get(row, col))
  };
}
