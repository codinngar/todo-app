package com.example.todo.dto;

import com.example.todo.model.TaskPriority;
import com.example.todo.model.TaskStatus;
import lombok.*;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskDto {
    private UUID id;
    private String title;
    private TaskStatus status;
    private TaskPriority priority;
    private String description;
}
