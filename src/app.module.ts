import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { BookModule } from './book/book.module';
import { ReaderModule } from './reader/reader.module';
import { VendorModule } from './vendor/vendor.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { LendingModule } from './lending/lending.module';
import { ProcurementModule } from './procurement/procurement.module';
import { ArrivalModule } from './arrival/arrival.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'ldmis',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }), AuthModule, UsersModule, DepartmentModule, EmployeeModule, BookModule, ReaderModule, VendorModule, WarehouseModule, LendingModule, ProcurementModule, ArrivalModule, SystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
