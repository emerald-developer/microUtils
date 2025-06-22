import * as fflate from 'fflate';

export async function compress(data: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const compressedData = fflate.deflateSync(data);
      const buffer = Buffer.from(compressedData); // Convert Uint8Array to Buffer
      resolve(buffer);
    } catch (error) {
      reject(error);
    }
  });
}

export async function decompress(compressedData: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const decompressedData = fflate.inflateSync(compressedData);
      const buffer = Buffer.from(decompressedData); // Convert Uint8Array to Buffer
      resolve(buffer);
    } catch (error) {
      reject(error);
    }
  });
}