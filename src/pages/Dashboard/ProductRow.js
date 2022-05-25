import React from 'react';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const {_id,name,picture,description,price,quantity} = product;
    return (
        <tr>
        <th>{index + 1}</th>
        <td><div class="avatar">
            <div class="w-8 rounded">
                <img src={picture} alt={name} />
            </div>
        </div></td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>
            <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
        </td>
    </tr>
    );
};

export default ProductRow;