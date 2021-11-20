import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';


@Module({  
  imports:[  
   MongooseModule.forRoot(),  
  
//   ConfigModule,
//   MongooseModule.forRootAsync({
//   imports: [ConfigModule],
//   useFactory: async (configService: ConfigService) => ({
//   uri: configService.get('MONGODB_URL'),
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: false,
// }),
// inject: [ConfigService],
// }), 
UsersModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

