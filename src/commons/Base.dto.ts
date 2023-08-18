export abstract class BaseDto<T>{
    assign(data:any){

        const keys:string[] = Object.keys(data).filter(key => Object.keys(this).includes(key))
        for (const key of keys) {
            this[key] = data[key]
        }

        return this;
    }
}