import { HttpInterceptorFn } from '@angular/common/http';

export const authenticateInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({
    setHeaders: {
      'TOKEN': 'AO900kq991K',
    }
  });
  return next(request);
};
