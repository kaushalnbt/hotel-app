<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\Food;
use Illuminate\Support\Facades\Validator;

class DashboardController extends Controller
{

    protected $apiResponse;

    public function __construct(ApiResponse $apiResponse)
    {
        $this->apiResponse = $apiResponse;
    }
    
    public function index()
    {
        try {
            // Count total hotels and foods
            $totalHotels = Hotel::count();
            $totalFoods = Food::count();

            // Group monthly food creation data
            $monthlyData = Food::query()
                ->selectRaw('YEAR(created_at) as year, MONTH(created_at) as month, COUNT(*) as total')
                ->groupBy('year', 'month')
                ->orderBy('year')
                ->orderBy('month')
                ->get()
                ->map(function ($data) {
                    return [
                        'year' => $data->year,
                        'month' => $data->month,
                        'total' => $data->total,
                    ];
                });

            // Response
            return $this->apiResponse->sendResponse(200, 'Dashboard data retrieved successfully', [
                'totalHotels' => $totalHotels,
                'totalFoods' => $totalFoods,
                'monthlyData' => $monthlyData,
            ]);
        } catch (\Exception $e) {
            return $this->apiResponse->sendResponse(500, 'An error occurred', null, $e->getMessage());
        }
    }
}