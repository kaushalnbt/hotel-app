<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FoodController extends Controller
{

    protected $apiResponse;

    public function __construct(ApiResponse $apiResponse)
    {
        $this->apiResponse = $apiResponse;
    }
    
    public function index(Request $request)
    {
        try {
            $search = $request->input('search');
            $foods = Food::with('hotel')
                ->when($search, function ($query, $search) {
                    return $query->where('name', 'like', "%{$search}%")
                                 ->orWhereHas('hotel', function ($q) use ($search) {
                                     $q->where('name', 'like', "%{$search}%");
                                 });
                })
                ->orderBy('name', 'asc')
                ->get();

            return $this->apiResponse->sendResponse(200, 'Foods retrieved successfully', $foods);
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(500, 'An error occurred', null, $e->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'price' => 'required|numeric|min:0',
                'hotel_id' => 'required|exists:hotels,id',
            ]);

            if ($validator->fails()) {
                return $this->apiResponse->sendResponse(422, 'Validation errors', null, $validator->errors());
            }

            $food = Food::create($validator->validated());

            return $this->apiResponse->sendResponse(201, 'Food created successfully', $food);
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(500, 'An error occurred', null, $e->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $food = Food::with('hotel')->findOrFail($id);
            return $this->apiResponse->sendResponse(200, 'Food retrieved successfully', $food);
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(404, 'Food not found', null, $e->getMessage());
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'price' => 'required|numeric|min:0',
                'hotel_id' => 'required|exists:hotels,id',
            ]);

            if ($validator->fails()) {
                return $this->apiResponse->sendResponse(422, 'Validation errors', null, $validator->errors());
            }

            $food = Food::findOrFail($id);
            $food->update($validator->validated());

            return $this->apiResponse->sendResponse(200, 'Food updated successfully', $food);
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(500, 'An error occurred', null, $e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $food = Food::findOrFail($id);
            $food->delete();

            return $this->apiResponse->sendResponse(200, 'Food deleted successfully');
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(500, 'An error occurred', null, $e->getMessage());
        }
    }
}