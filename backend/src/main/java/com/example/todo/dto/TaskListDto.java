package com.example.todo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskListDto {
    private UUID id;
    private String title;
    private Integer count;
    private Double progress;
    private String description;
}
