import { HttpErrorResponse } from '@angular/common/http';

export type BookError = Error | HttpErrorResponse | string | null;
