let is_ok = true;

const promiseJS = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(is_ok) {
                resolve(task);
            } else {
                reject("Hubo un error")
            }
        }, time);
    });
}
export default promiseJS