const { Pool } = require('pg');

//crea la coneccion a la base de postgres
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'inventario',
    port: '5432'
});
//Obtiene todos los productos de la base de datos
const getProductos = async (req, res) => {
    const response = await pool.query('SELECT * FROM Productos');
    res.status(200).json(response.rows);
};
//Obtiene los productos de la base de datos con el id que se ingrese en la ruta
const getProductoById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM Productos WHERE id_producto = $1', [id]);    
    res.json(response.rows);
};
//Crea un nuevo productos y lo añade a la base de datos 
const createProducto = async (req, res) => {
    const { nombre, precio, id_proveedor } = req.body;
    const response = await pool.query('INSERT INTO Productos( nombre, precio, id_proveedor) VALUES ($1, $2, $3)', [nombre, precio, id_proveedor]);
    console.log(response);
    res.json({
        message: 'Product Added Succesfully',
        body: {
            Producto: {nombre, precio, id_proveedor}
        }
    })
};
//Actualiza el producto con el id agregado a la ruta 
const updateProducto = async (req, res) => {
    const id = req.params.id;
    const { nombre, precio, id_proveedor } = req.body;
    const response = await pool.query('UPDATE Productos SET nombre = $1, precio = $2, id_proveedor = $3 WHERE id_producto = $4',[nombre,precio,id_proveedor,id]);
    console.log(response);
    res.json(`Product Updated succesfully`);

};
//Elimina el producto con el id agregado a la ruta 
const deleteProducto = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM Productos WHERE id_producto = $1',[id]);
    console.log(response);
    res.json(`Producto ${id} deleted succesfully`);
}
//*************************************************************************************************** */

//Obtiene todos los proveedores de la base de datos
const getProveedores = async (req, res) => {
    const response = await pool.query('SELECT * FROM Proveedores');
    res.status(200).json(response.rows);
};
//Obtiene los proveedores de la base de datos con el id que se ingrese en la ruta
const getProveedorById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM Proveedores WHERE id_proveedor = $1', [id]);    
    res.json(response.rows);
};
//Crea un nuevo proveedor y lo añade a la base de datos 
const createProveedor = async (req, res) => {
    const { id_proveedor, nombre, direccion, telefono  } = req.body;
    const response = await pool.query('INSERT INTO Proveedores( id_proveedor, nombre, direccion, telefono) VALUES ($1, $2, $3, $4)', [id_proveedor, nombre, direccion, telefono ]);
    console.log(response);
    res.json({
        message: 'Proveedor Added Succesfully',
        body: {
            Proveedor: {id_proveedor, nombre, direccion, telefono}
        }
    })
};
//Actualiza el proveedor con el id agregado a la ruta 
const updateProveedor = async (req, res) => {
    const id = req.params.id;
    const { id_proveedor, nombre, direccion, telefono  } = req.body;
    const response = await pool.query('UPDATE Proveedores SET id_proveedor = $1, nombre = $2, direccion = $3, telefono = $4 WHERE id_proveedor = $5',[id_proveedor,nombre,direccion,telefono,id]);
    console.log(response);
    res.json(`Proveedor Updated succesfully`);

};
//Elimina el producto con el id agregado a la ruta 
const deleteProveedor = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM Proveedores WHERE id_proveedor = $1',[id]);
    console.log(response);
    res.json(`Proveedor ${id} deleted succesfully`);
}
//Exporta las funciones
module.exports = {
    getProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto,

    getProveedores,
    getProveedorById,
    createProveedor,
    updateProveedor,
    deleteProveedor
}
