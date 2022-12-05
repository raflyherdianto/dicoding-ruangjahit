<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'name'=>['nullable', 'string', 'max:255'],
            'username'=>['nullable', 'string', 'max:255', 'unique:users,username'],
            'email'=>['nullable', 'string', 'email', 'max:255', 'unique:users,email'],
            'password'=>['nullable', 'confirmed'],
            'first_address'=>['nullable', 'string', 'max:255'],
            'second_address'=>['nullable', 'string', 'max:255'],
            'province_id'=>['nullable', 'integer'],
            'regency_id'=>['nullable', 'integer'],
            'zip_code'=>['nullable', 'string', 'max:255'],
            'first_phone'=>['nullable', 'string', 'max:255'],
            'second_phone'=>['nullable', 'string', 'max:255'],
            'store_name'=>['nullable', 'string', 'max:255'],
            'bank_account'=>['nullable', 'string', 'max:255'],
            'bank_name'=>['nullable', 'string', 'max:255'],
            'open_time'=>['nullable', 'string', 'max:255'],
            'close_time'=>['nullable', 'string', 'max:255'],
            'store_status'=>['nullable', 'string', 'max:255'],
            'category_product_id'=>['nullable', 'integer'],
        ];
    }
}
