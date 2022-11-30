<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'attributes' => [
                'name' => $this->name,
                'username' => $this->username,
                'email' => $this->email,
                'first_address' => $this->first_address,
                'second_address' => $this->second_address,
                'province_id' => $this->province_id,
                'regency_id' => $this->regency_id,
                'zip_code' => $this->zip_code,
                'first_phone' => $this->first_phone,
                'second_phone' => $this->second_phone,
                'bank_name' => $this->bank_name,
                'bank_account' => $this->bank_account,
                'store_name' => $this->store_name,
                'store_status' => $this->store_status,
                'open_time' => $this->open_time,
                'close_time' => $this->close_time,
            ],
        ];
    }
}
