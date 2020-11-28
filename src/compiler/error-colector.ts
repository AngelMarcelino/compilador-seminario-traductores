
class ErrorColector {
  errors: string[] = [];
  push(error: string) {
    this.errors.push(error);  
  }
}

export const errors = new ErrorColector();
