module.exports = {
    create: (req, res, next) => {
        const db = req.post.get('db');
        const {product_name, description, price, image_url} = req.body

        db.create_product(product_name, description, price, image_url)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db');

        db.read_products()
        .then(product => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
    },
    update: (req, res, next) => {
        const db = req.app.get('db');
        const {params, query} = req

        db.update_product(params.id, query.desc)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
        console.log(err)
    }
}