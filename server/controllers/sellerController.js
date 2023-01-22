require('../models/database');
const Category = require('../models/Category');
const Seller = require('../models/Seller');

/**
 * GET /
 * Homepage 
*/
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Seller.find({}).sort({_id: -1}).limit(limitNumber);
    const painter = await Seller.find({ 'category': 'Painter' }).limit(limitNumber);
    const Tutors = await Seller.find({ 'category': 'Tutors' }).limit(limitNumber);
    const Builders = await Seller.find({ 'category': 'Builders' }).limit(limitNumber);
    const Electricians = await Seller.find({ 'category': 'Electricians' }).limit(limitNumber);

    const service = { latest, painter, Tutors, Builders ,Electricians};

    res.render('index', { title: 'AVAIL', categories, service } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}

/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'Services - Categoreis', categories } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /categories/:id
 * Categories By Id
*/
exports.exploreCategoriesById = async(req, res) => { 
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Seller.find({ 'category': categoryId }).limit(limitNumber);
    res.render('categories', { title: 'services - Categoreis', categoryById } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 
 
/**
 * GET /seller/:id
 * Seller 
*/
exports.exploreRecipe = async(req, res) => {
  try {
    let SellerId = req.params.id;
    const seller = await Seller.findById(SellerId);
    res.render('seller', { title: 'services - Seller', seller } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * POST /search
 * Search 
*/
exports.searchSeller = async(req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let seller = await Seller.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
    res.render('search', { title: 'services - Search', seller } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
  
}

/**
 * GET /explore-latest
 * Explplore Latest 
*/
exports.exploreLatest = async(req, res) => {
  try {
    const limitNumber = 50;
    const seller = await Seller.find({}).sort({ _id: -1 }).limit(limitNumber);
    res.render('explore-latest', { title: 'services - Explore Latest', seller } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 



/**
 * GET /explore-random
 * Explore Random as JSON
*/
exports.exploreRandom = async(req, res) => {
  try {
    let count = await Seller.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let seller = await Seller.findOne().skip(random).exec();
    res.render('explore-random', { title: 'services - Explore Latest', seller } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /submit-seller
 * Submit seller
*/
exports.submitSeller = async(req, res) => {
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
  res.render('submit-seller', { title: 'services - Submit Seller', infoErrorsObj, infoSubmitObj  } );
}

/**
 * POST /submit-seller
 * Submit seller
*/
exports.submitSellerOnPost = async(req, res) => {
  try {

    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if(!req.files || Object.keys(req.files).length === 0){
      console.log('No Files where uploaded.');
    } else {

      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

      imageUploadFile.mv(uploadPath, function(err){
        if(err) return res.satus(500).send(err);
      })

    }

    const newSeller = new Seller({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      ingredients: req.body.ingredients,
      category: req.body.category,
      image: newImageName
    });
    
    await newSeller.save();

    req.flash('infoSubmit', 'CONGRATULATIONS YOUR PROFILE SUCCESSFULLY ADDED (YOU HAVE 30 DAYS UNTIL TO MAKE THE PAYMENT )')
    res.redirect('/submit-seller');
  } catch (error) {
    // res.json(error);
    req.flash('infoErrors', error);
    res.redirect('/submit-seller');
  }
}


// Delete seller
async function deleteSeller(){
  try {
    await Seller.deleteOne({ name: 'New name Updated' });
  } catch (error) {
    console.log(error);
 }
}
deleteSeller();


//Update seller
async function updateSeller(){
  try {
    const res = await Seller.updateOne({ name: 'images testing 2' }, { name: 'New name Updated' });
   res.n; // Number of documents matched
    res.nModified; // Number of documents modified
  } catch (error) {
    console.log(error);
  }
}
updateSeller();
