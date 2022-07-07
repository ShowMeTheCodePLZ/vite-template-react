import { Module } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
