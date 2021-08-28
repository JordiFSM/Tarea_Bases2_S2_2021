const { Router }  = require('express');
const router = Router();

//Funciones exportadas
const { getProductos, createProducto, getProductoById, updateProducto, deleteProducto, getProveedores,getProveedorById, createProveedor, updateProveedor, deleteProveedor } = require('../controllers/index.controller')

// Rutas de Productos

router.get('/Productos/', getProductos);
router.get('/Productos/:id', getProductoById);
router.post('/Productos', createProducto);
router.put('/Productos/:id', updateProducto);
router.delete('/Productos/:id', deleteProducto);

//Rutas de proveedores

router.get('/Proveedores/', getProveedores);
router.get('/Proveedores/:id', getProveedorById);
router.post('/Proveedores', createProveedor);
router.put('/Proveedores/:id', updateProveedor);
router.delete('/Proveedores/:id', deleteProveedor);

module.exports = router;