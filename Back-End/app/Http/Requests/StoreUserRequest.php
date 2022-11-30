<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed'],
            'first_address' => ['required', 'string', 'max:255'],
            'province_id' => ['required', 'integer'],
            'regency_id' => ['required', 'integer'],
            'zip_code' => ['required', 'string', 'max:255'],
            'first_phone' => ['required', 'string', 'max:255'],
            'roles' => ['required'],
        ];
    }
}
