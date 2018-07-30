class Controller {
    request(req, res, next){
        this.req    = req;
        this.res    = res;
        this.next   = next;
        return this;
    }
}

module.exports  =   Controller;