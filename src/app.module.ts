import { Module } from '@nestjs/common';
import { SorareModule } from './sorare.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SorareResolver } from './sorare.resolver';
import { SorareService } from './sorare.service';
import { SorareController } from './sorare.controller';

@Module({
  imports: [
    SorareModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [SorareController],
  providers: [SorareService, SorareResolver],
})
export class AppModule {}
