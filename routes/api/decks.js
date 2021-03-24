const router = require('express').Router();
const decksController = require('../../controllers/decksController');

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

// Matches with "/api/decks"
router.route('/')
    .get(decksController.findAll)
    .post(upload.single('file'), decksController.create);

// Matches with "/api/decks/:id"
router
    .route('/:id')
    .get(decksController.findById)
    .put(decksController.update)
    .delete(decksController.remove);

module.exports = router;
