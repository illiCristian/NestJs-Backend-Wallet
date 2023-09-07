import { Model } from 'mongoose';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CvuGenerator } from './schema/cvu.model';

@Injectable()
export class CvuGeneratorService {
  constructor(
    @InjectModel('CvuGenerator')
    private readonly cvuGeneratorModel: Model<CvuGenerator>,
  ) {}
  private usedCVUs: Set<string> = new Set<string>();

  async generateUniqueCVU(): Promise<string> {
    const prefix = '00000031000'; // Prefijo del banco
    let cvu: string;

    let retries = 0;
    const maxRetries = 10; // Límite de reintentos

    do {
      retries = 0;
      const maxRetries = 10; // Límite de reintentos
      cvu = this.generateRandomCVU();
      const existingCVU = await this.cvuGeneratorModel.findOne({ cvu }).exec();

      if (!existingCVU) {
        break;
      }
    } while (true);

    return cvu;
  }

  private generateRandomCVU(): string {
    return '1234567890123456789012';
  }
}
