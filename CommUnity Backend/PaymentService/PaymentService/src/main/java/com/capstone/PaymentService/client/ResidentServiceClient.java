package com.capstone.PaymentService.client;


import com.capstone.PaymentService.dto.ResidentResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "resident-service", url="http://localhost:9999")
public interface ResidentServiceClient {

    @GetMapping("/api/community/management-service/residents")
    public List<ResidentResponse> getAllResidents();
}