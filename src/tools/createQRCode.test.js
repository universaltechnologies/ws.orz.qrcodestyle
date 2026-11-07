import createQRCode from "./createQRCode";

const qrOptions = {
  typeNumber: 0,
  errorCorrectionLevel: "Q"
};

test("creates a UTF-8 matrix for non-ASCII text", () => {
  const qr = createQRCode("中文二维码", qrOptions);

  expect(qr.getModuleCount()).toBe(25);
  expect(typeof qr.isDark(0, 0)).toBe("boolean");
});

test("keeps node-qrcode automatic mixed-mode sizing", () => {
  const qr = createQRCode("12345678901234567890abcde", qrOptions);

  expect(qr.getModuleCount()).toBe(25);
});

test("maps an explicit mode and version", () => {
  const qr = createQRCode("1234", {
    typeNumber: 1,
    mode: "Numeric",
    errorCorrectionLevel: "Q"
  });

  expect(qr.getModuleCount()).toBe(21);
});
