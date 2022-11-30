<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
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
                'user_id' => $this->user_id,
                'price'=> $this->price,
                'description' => $this->description,
                'rating' => $this->rating,
                'stock' => $this->stock,
                'category_product_id' => $this->category_product_id,
            ],
        ];
    }
}
