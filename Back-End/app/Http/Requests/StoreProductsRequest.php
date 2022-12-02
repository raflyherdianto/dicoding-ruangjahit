<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'category_product_id' => ['required', 'integer'],
            'price' => ['required', 'integer'],
            'description' => ['required', 'string'],
            'stock' => ['required', 'integer'],
            'size' => ['required', 'string'],
            'color' => ['required', 'string'],
            'weight' => ['required'],
        ];
    }
}
