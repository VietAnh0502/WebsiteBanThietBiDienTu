import { Router } from 'express';
import {
  registerHandler,
  loginHandler,
  sendOTPController,
  resetPasswordController,
  logoutHandler,
} from './src/controller/auth-controller';
import {
  getAllUser,
  createUserHandler,
  deleteUserHandler,
  getUserHandler,
  updateUserHandler,
  getCustomerHandler,
} from './src/controller/user-controller';
import {
  createCategory,
  getAllCategory,
  get1Category,
  updateCategory,
  deleteCategory,
} from './src/controller/category-controller';
import {
  createBrand,
  getAllBrand,
  get1Brand,
  updateBrand,
  deleteBrand,
} from './src/controller/brand-controller';
import {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  getProductByCategory,
  getProductByBrand,
  getSearchProduct,
  getRecommendProduct
} from './src/controller/product-controller';
import {
  momoPayment,
  zaloPayment
} from './src/controller/payment-controllers';
import {
  createOrder,
  getAllOrder,
  getOrderByID,
  updatePaymentMethod,
  getOrderByUserID,
  updateOrderStatus,
  getStatistics
} from './src/controller/order-controller';
import { updateCustomer } from './src/controller/customer-controller';


const router = Router();


// ===================================AUTHENTICATION===================================
router.post('/register', (req, res) => {
  console.log('Received data:', req.body);
  registerHandler(req, res);
});

router.post('/login', (req, res) => {
  console.log('Received data:', req.body);
  loginHandler(req, res);
})

router.post('/forgot-password', (req, res) => {
  console.log('Received data:', req.body);
  sendOTPController(req, res);
})

router.post('/reset-password', (req, res) => {
  console.log('Received data:', req.body);
  resetPasswordController(req, res);
});

router.post('/logout', (req, res) => {
  logoutHandler(req, res);
});

// ===================================USER===================================

router.get('/allUser', (req, res) => {
  getAllUser(req, res);
});

router.post('/createUser', (req, res) => {
  createUserHandler(req, res);
});

router.delete('/deleteUser', (req, res) => {
  deleteUserHandler(req, res);
});

router.post('/getUser', (req, res) => {
  getUserHandler(req, res);
});

router.post('/updateUser', (req, res) => {
  updateUserHandler(req, res);
});

router.get('/getCustomer/:id', (req, res) => {
  getCustomerHandler(req, res);
});

// ===================================CATEGORY===================================
router.get('/allCategory', (req, res) => {
  getAllCategory(req, res);
});

router.post('/createCategory', (req, res) => {
  createCategory(req, res);
});

router.post('/get1Category', (req, res) => {
  get1Category(req, res);
});

router.put('/updateCategory', (req, res) => {
  updateCategory(req, res);
});

router.delete('/deleteCategory', (req, res) => {
  deleteCategory(req, res);
});
// ===================================BRAND===================================

router.get('/allBrand', (req, res) => {
  getAllBrand(req, res);
});

router.post('/createBrand', (req, res) => {
  createBrand(req, res);
});

router.post('/get1Brand', (req, res) => {
  get1Brand(req, res);
});

router.put('/updateBrand', (req, res) => {
  updateBrand(req, res);
});

router.delete('/deleteBrand', (req, res) => {
  deleteBrand(req, res);
});

// ===================================PRODUCT===================================

router.post('/createProduct', (req, res) => {
  createProduct(req, res);
});

router.get('/getAllProduct', (req, res) => {
  getAllProduct(req, res);
});

router.post('/getProductById', (req, res) => {
  getProductById(req, res);
});

router.delete('/deleteProduct', (req, res) => {
  deleteProduct(req, res);
});

router.put('/updateProduct', (req, res) => {
  updateProduct(req, res);
});

router.get('/getProductByCategory/:id', (req, res) => {
  getProductByCategory(req, res);
});

router.get('/getProductByBrand/:id', (req, res) => {
  getProductByBrand(req, res);
});

router.get('/getRecommend/:productId', (req, res) => {
  getRecommendProduct(req, res);
});
// ===================================SEARCH===================================
router.get('/search', (req, res) => {
  getSearchProduct(req, res);
});

// ===================================MOMO===================================
router.post('/momopayment', (req, res) => {
  momoPayment(req, res);
});

router.post('/zalopayment', (req, res) => {
  zaloPayment(req, res);
});


// ===================================ORDER===================================
router.post('/createOrder', (req, res) => {
  createOrder(req, res);
});

router.get('/getAllOrder', (req, res) => {
  getAllOrder(req, res);
});

router.get('/getOrderByID/:id', (req, res) => {
  getOrderByID(req, res);
});
router.patch('/updatePaymentMethod/:id', (req, res) => {
  updatePaymentMethod(req, res);
});

router.get('/getOrderByUserID/:userId', (req, res) => {
  getOrderByUserID(req, res);
});

router.patch('/updateOrderStatus/:id', (req, res) => {
  updateOrderStatus(req, res);
});

router.get('/getStatic', (req, res) => {
  getStatistics(req, res);
});
//=========================CUSTOMER==============================
router.patch('/updateCustomer/:id', (req, res) => {
  updateCustomer(req, res);
});

export default router;
