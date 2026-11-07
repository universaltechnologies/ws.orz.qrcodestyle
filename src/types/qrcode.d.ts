declare module "qrcode/lib/core/qrcode" {
  export type QRCodeData = string | Array<{ data: string; mode?: string }>;

  export interface QRCodeOptions {
    version?: number;
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
    maskPattern?: number;
    toSJISFunc?: (kanji: string) => number;
  }

  export interface QRCodeResult {
    modules: {
      size: number;
      get(row: number, col: number): number;
    };
  }

  export function create(data: QRCodeData, options?: QRCodeOptions): QRCodeResult;
}
