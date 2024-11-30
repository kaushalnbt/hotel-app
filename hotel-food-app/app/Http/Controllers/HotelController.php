<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HotelController extends Controller
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
            $hotels = Hotel::query()
                ->when($search, function ($query, $search) {
                    return $query->where('name', 'like', "%{$search}%")
                                 ->orWhere('location', 'like', "%{$search}%");
                })
                ->orderBy('name', 'asc')
                ->get();

            return $this->apiResponse->sendResponse(200, 'Hotels retrieved successfully', $hotels);
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
                'location' => 'required|string|max:255',
            ]);

            if ($validator->fails()) {
                return $this->apiResponse->sendResponse(422, 'Validation errors', null, $validator->errors());
            }

            $hotel = Hotel::create($validator->validated());

            return $this->apiResponse->sendResponse(201, 'Hotel created successfully', $hotel);
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(500, 'An error occurred', null, $e->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $hotel = Hotel::findOrFail($id);
            return $this->apiResponse->sendResponse(200, 'Hotel retrieved successfully', $hotel);
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(404, 'Hotel not found', null, $e->getMessage());
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'location' => 'required|string|max:255',
            ]);

            if ($validator->fails()) {
                return $this->apiResponse->sendResponse(422, 'Validation errors', null, $validator->errors());
            }

            $hotel = Hotel::findOrFail($id);
            $hotel->update($validator->validated());

            return $this->apiResponse->sendResponse(200, 'Hotel updated successfully', $hotel);
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(500, 'An error occurred', null, $e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $hotel = Hotel::findOrFail($id);
            $hotel->delete();

            return $this->apiResponse->sendResponse(200, 'Hotel deleted successfully');
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(500, 'An error occurred', null, $e->getMessage());
        }
    }
}