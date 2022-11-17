import { Module,Global} from '@nestjs/common';

const APP_KEY = 'mysecretkey';
const APP_KEY_PROD = 'mysecretPRODkey';


@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: 'APP_KEY',
            useValue: process.env.NODE_ENV === 'production' ? APP_KEY_PROD : APP_KEY,
          },
         
    ],
    exports: ['APP_KEY'],
})
export class DatabaseModule {}
