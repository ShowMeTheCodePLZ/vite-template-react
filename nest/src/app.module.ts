import { Module } from '@nestjs/common';
import Modules from './modules/index';

@Module({
  imports: Modules,
})
export class AppModule {}
