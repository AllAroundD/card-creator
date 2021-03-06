const router = require('express').Router();
const cardsController = require('../../controllers/cardsController');

const path = require('path');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './client/public/uploads');
        },
        filename(req, file, cb) {
            cb(null, `${new Date().getTime()}_${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 1000000 // max file size 1MB = 1000000 bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
            return cb(
                new Error(
                    'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
                )
            );
        }
        cb(undefined, true); // continue with upload
    }
});

// Matches with "/api/cards"
router.route('/')
    .get(cardsController.findAll)
    .post(upload.single('file'), cardsController.create);

// Matches with "/api/cards/:id"
router
    .route('/:id')
    .get(cardsController.findById)
    .put(upload.single('file'), cardsController.update)
    .delete(cardsController.remove);

module.exports = router;
