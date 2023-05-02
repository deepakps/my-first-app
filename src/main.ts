// Code from this file first gets excuted in an Angular app.
// Date - 01st May, 2023.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// 'bootstrapModule' is where bootstrap starts Angular app by passing 'AppModule'. 
// 'AppModule' refers to app.modules.ts file inside src > app folder.
// Date - 01st May, 2023.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
