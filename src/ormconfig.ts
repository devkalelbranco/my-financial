import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
    type: 'sqlite',
    database: '.db/my-financial',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
};